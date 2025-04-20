
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface OutputProps {
  result: string | null;
}

const Output: React.FC<OutputProps> = ({ result }) => {
  if (!result) return null;

  return (
    <Card className="mt-6 bg-secondary">
      <CardContent className="p-6">
        <h3 className="text-lg font-medium mb-2">Result</h3>
        <p className="text-muted-foreground">{result}</p>
      </CardContent>
    </Card>
  );
};

export default Output;
