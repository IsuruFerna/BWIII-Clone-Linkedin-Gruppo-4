const FooterRight = () => {
  return (
    <div>
      <div className="d-flex justify-content-center text-secondary smaller align-items-center ">
        <p className="px-1">Informazioni</p>
        <p className="px-1">Accessibilità</p>
      </div>
      <div className="d-flex justify-content-center text-secondary smaller align-items-center ">
        <p className="px-1">Centro Assistenza</p>
        <p className="px-1">Privacy e condizioni</p>
      </div>
      <div className="d-flex justify-content-center text-secondary smaller align-items-center ">
        <p className="px-1">Opzioni per gli annunci pubblicitari</p>
      </div>
      <div className="d-flex justify-content-center text-secondary smaller align-items-center ">
        <p className="px-1">Pubblicità</p>
        <p className="px-1">Servizi alle aziende</p>
      </div>
      <div className="d-flex justify-content-center text-secondary smaller align-items-center ">
        <p className="px-1">Scarica l'app LinkedIn</p>
        <p className="px-1">Altro</p>
      </div>
      <span className="bg-white smaller d-flex align-items-center justify-content-center">
        <img
          src="https://www.salvatorepumo.it/wp-content/uploads/2022/02/logo-linkedin-oggi.png"
          alt="logoLink"
          width={"80px"}
          className="mb-1"
        />
        <p className="text-secondary smaller">LinkedIn Corporation © 2023</p>
      </span>
    </div>
  );
};
export default FooterRight;
