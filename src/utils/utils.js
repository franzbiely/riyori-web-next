export const renderImage = (image) => {
  return image || '/images/ryori-brand.png'
}

export const formatCurrency = (amount) => {
  const formatter = new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
  });

  return formatter.format(amount);
}

