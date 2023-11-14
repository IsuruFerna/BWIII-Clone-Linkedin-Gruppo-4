const PublicProfile = () => {
  return (
    <div className="mb-3 d-flex flex-column">
      <div>
        <div className="fw-bold">Lingua del profilo</div>
        <div>
          <p className="text-secondary">Italiano</p>
        </div>
        <div className="fw-bold">Public profile & Url</div>
        <div
          className="text-secondary smaller"
          style={{ "word-break": "break-all" }}
        >
          www.linkedin.com/in/angela-prestano-603240243
        </div>
      </div>
    </div>
  );
};

export default PublicProfile;
