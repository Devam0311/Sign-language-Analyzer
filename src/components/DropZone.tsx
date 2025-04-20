import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Image } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DropZoneProps {
  onDrop: (files: File[]) => void;
  multiple?: boolean;
}

const DropZone: React.FC<DropZoneProps> = ({ onDrop, multiple = true }) => {
  const [isDragActive, setIsDragActive] = useState(false);

  // Traverse directories dropped
  const getFilesFromEvent = async (event: any): Promise<File[]> => {
    const items = event.dataTransfer?.items;
    if (items) {
      const files: File[] = [];
      const traverse = (entry: any): Promise<void> =>
        new Promise(resolve => {
          if (entry.isFile) {
            entry.file((file: File) => {
              files.push(file);
              resolve();
            });
          } else if (entry.isDirectory) {
            const reader = entry.createReader();
            reader.readEntries(entries =>
              Promise.all(entries.map(traverse)).then(() => resolve())
            );
          } else {
            resolve();
          }
        });

      const entries = Array.from(items)
        .map(i => i.webkitGetAsEntry && i.webkitGetAsEntry())
        .filter(Boolean as any);

      await Promise.all(entries.map(traverse));
      return files;
    }
    return Array.from(event.dataTransfer.files);
  };

  const onDropInternal = useCallback(
    (acceptedFiles: File[]) => {
      onDrop(acceptedFiles);
      setIsDragActive(false);
    },
    [onDrop]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onDropInternal,
    getFilesFromEvent,
    accept: { 'image/*': [] },
    multiple,
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
  });

  return (
    <div className="relative">
      <div
        {...getRootProps()}
        className={cn(
          'dropzone flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed p-8 transition-colors',
          isDragActive ? 'border-primary bg-primary/10' : 'hover:border-primary/50 hover:bg-primary/5',
        )}
      >
        <input {...getInputProps()} />
        <Image className="w-12 h-12 text-primary/70" />
        <p className="text-center text-muted-foreground">
          {multiple
            ? 'Drag & drop one or more images (or folders) here, or click to select'
            : 'Drag & drop an image here, or click to select'}
        </p>
      </div>
    </div>
  );
};

export default DropZone;
