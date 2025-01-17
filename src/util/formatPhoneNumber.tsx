export function formatPhoneNumber(number?: number | string): string {
    const cleaned = String(number).replace(/\D/g, "");
  
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `+1 (${match[1]}) ${match[2]} - ${match[3]}`;
    }
  
    return String(number);
  }
  