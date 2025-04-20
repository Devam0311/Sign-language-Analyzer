import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader, BookOpen } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import DropZone from '@/components/DropZone';
import Output from '@/components/Output';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Index = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  // Handle drag-and-drop or file selection
  const handleFilesDrop = (files: File[]) => {
    setSelectedFiles(files);
    setResult(null);
    toast({
      title: `${files.length} file(s) loaded`,
      description: files.map(f => f.name).join(', '),
    });
  };

  // Process all files in a single batch
  const handleProcess = async () => {
    if (!selectedFiles.length) {
      toast({
        title: 'No images selected',
        description: 'Please drag & drop images or select a folder',
        variant: 'destructive',
      });
      return;
    }

    setIsProcessing(true);
    try {
      const formData = new FormData();
      // Append all files under the same field name 'files'
      selectedFiles.forEach(file => formData.append('files', file));

      const res = await fetch('/predict', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      const { letter } = await res.json();  // expects { letter: string }
      setResult(letter);
      toast({ title: 'Completed', description: letter });
    } catch (err: any) {
      toast({ title: 'Error', description: err.message, variant: 'destructive' });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="relative overflow-hidden min-h-screen bg-black text-white">
      {/* Anime-Style Aura Effects */}
      <motion.div
        className="pointer-events-none absolute top-0 bottom-0 left-0 w-60 bg-gradient-to-r from-blue-300/90 to-transparent blur-[160px]"
        initial={{ opacity: 0.4, scale: 1 }}
        animate={{ opacity: [0.4, 0.9, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute top-0 bottom-0 right-0 w-60 bg-gradient-to-l from-blue-300/90 to-transparent blur-[160px]"
        initial={{ opacity: 0.4, scale: 1 }}
        animate={{ opacity: [0.4, 0.9, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      <div className="relative z-10 p-4 md:p-8 max-w-3xl mx-auto fade-in">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold">Shadow Monarch's ASL Vision</h1>
          <Link to="/readme">
            <Button variant="outline" className="gap-2">
              <BookOpen className="w-4 h-4" /> README
            </Button>
          </Link>
        </div>

        {/* Drag & Drop Area */}
        <DropZone multiple onDrop={handleFilesDrop} />

        {selectedFiles.length > 0 && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
              {selectedFiles.map((file, idx) => (
                <div key={idx} className="text-sm text-white truncate">
                  {file.name}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <Button onClick={handleProcess} disabled={isProcessing} className="w-full md:w-auto">
                {isProcessing ? (
                  <>
                    <Loader className="mr-2 h-4 w-4 animate-spin" />Processing...
                  </>
                ) : (
                  'Process Images'
                )}
              </Button>
            </div>
          </>
        )}

        {result !== null && <Output result={result} />}
      </div>
    </div>
  );
};

export default Index;
