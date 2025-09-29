// Utility function to sort products by dimensions and other numeric patterns

export interface Product {
  id?: string;
  name: string;
  [key: string]: any; // Allow other product properties
}

// Function to extract dimensions from product name and calculate volume for sorting
const extractDimensions = (name: string): number => {
  // Match patterns like "7*7*5", "12*12*6", "16*16*6", etc.
  const dimensionMatch = name.match(/(\d+)\*(\d+)\*(\d+)/);
  if (dimensionMatch) {
    const length = parseInt(dimensionMatch[1]);
    const width = parseInt(dimensionMatch[2]);
    const height = parseInt(dimensionMatch[3]);
    // Calculate volume for sorting (length * width * height)
    return length * width * height;
  }
  
  // Match 2D dimensions like "12*12", "10*8", etc.
  const dimension2DMatch = name.match(/(\d+)\*(\d+)(?!\*)/);
  if (dimension2DMatch) {
    const length = parseInt(dimension2DMatch[1]);
    const width = parseInt(dimension2DMatch[2]);
    // Calculate area for sorting (length * width)
    return length * width;
  }
  
  // If no dimensions found, check for other numeric patterns like "1kg", "2kg", etc.
  const weightMatch = name.match(/(\d+)\s*kg/i);
  if (weightMatch) {
    return parseInt(weightMatch[1]) * 1000; // Convert kg to a comparable scale
  }
  
  // Check for simple numeric patterns at the beginning like "100 pieces", "50 count", etc.
  const numericMatch = name.match(/^(\d+)/);
  if (numericMatch) {
    return parseInt(numericMatch[1]);
  }
  
  // If no numeric pattern found, return a high value to put it at the end
  return 999999;
};

// Main sorting function that takes an array of products and returns sorted array
export const sortProductsByDimensions = <T extends Product>(products: T[]): T[] => {
  return [...products].sort((a, b) => {
    const volumeA = extractDimensions(a.name);
    const volumeB = extractDimensions(b.name);
    
    // Primary sort by volume/dimensions
    if (volumeA !== volumeB) {
      return volumeA - volumeB;
    }
    
    // Secondary sort by name alphabetically if dimensions are same
    return a.name.localeCompare(b.name);
  });
};
