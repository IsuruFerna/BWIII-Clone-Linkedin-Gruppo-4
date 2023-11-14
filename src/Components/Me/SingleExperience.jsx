import Image from "react-bootstrap/Image";

const SingleExperience = () => {
   return (
      <>
         <div className="d-flex">
            <Image
               className="logo-experience mt-2 me-2"
               src="https://placekitten.com/100"
               alt="logo-agenzi"
            />
            <div>
               <h4 className="fs-5 mt-2 mb-0">Lorem</h4>
               <p className="mb-0">Freelance</p>
               <p className="mb-0 text-dark text-opacity-50 lh-sm">
                  2023 - Presente &#8226; 11 mesi
               </p>
               <p className="mt-0 text-dark text-opacity-50 lh-sm">Da Remoto</p>
               <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Distinctio beatae iure deserunt cupiditate, ab natus ipsum?
                  Illum, at? Ut non ipsum animi distinctio vero, porro repellat
                  voluptatem officiis odit iste!
               </p>
               <p className="fw-semibold">
                  Compatenze:{" "}
                  <small className="experience-tools fw-normal text-dark text-opacity-75">
                     Django &#8226; HTML &#8226; CSS
                  </small>
               </p>
            </div>
         </div>
      </>
   );
};

export default SingleExperience;
