const QRCodeGenerator = ({ url, size }: any) => {
  return (
    <div id="qr-container">
      <img width={size} height={size} 
      src={`https://chart.apis.google.com/chart?cht=qr&chs=248&chl=${url}`}
      />
    </div>
  );
};

export default QRCodeGenerator;
