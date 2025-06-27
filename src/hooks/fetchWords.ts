import { supabase } from './supabaseClient';

// Define the type for a word row. Adjust fields as needed.
export interface Word {
  id: number;
  word: string;
  // Add other fields if your table has them
}
export async function fetchWords(): Promise<Word[] | undefined> {
  const { data, error } = await supabase
    .from<Word>('words')
    .select('*');

  console.log("Supabase fetchWords result:", { data, error });

  if (error) {
    console.error('Error fetching words:', error);
    return undefined;
  }

  return data ?? undefined;
}