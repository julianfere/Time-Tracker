const footerHelper = (word: string, hours: number): string => {
  switch (word) {
    case "daily":
      return `Yesterday - ${hours}hrs`;
    case "weekly":
      return `Last week - ${hours}hrs`;
    case "monthly":
      return `Last month - ${hours}hrs`;
    default:
      return "";
  }
};

export { footerHelper };
