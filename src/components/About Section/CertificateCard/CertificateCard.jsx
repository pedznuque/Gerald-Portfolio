import React, { useEffect, useState } from "react";
import "./CertificateCard.css";
import { FaCertificate } from "react-icons/fa";
import { IoEnterOutline } from "react-icons/io5";

const CertificateCard = ({
  image = "",
  details = "",
  title = "",
  link = "",
}) => {
  const [open, setOpen] = useState(false);

  const certificateImage = `${image}`;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <div className="certificate_card">
        <div className="image_container">
          <img src={certificateImage} alt="Certificate" />
        </div>

        <div className="details_container">
          {title && (
            <div className="title">
              <FaCertificate />
              {title}
            </div>
          )}

          {details && <div className="details">{details}</div>}

          {link && (
            <a href={link} target="blank">
              <IoEnterOutline /> <p>Visit Site</p>
            </a>
          )}
        </div>

        <div className="action_container">
          <div className="view_button" onClick={() => setOpen(true)}>
            View
          </div>
        </div>
      </div>

      {open && (
        <div className="viewer_overlay" onClick={() => setOpen(false)}>
          <div className="viewer_modal" onClick={(e) => e.stopPropagation()}>
            <img src={certificateImage} alt="Certificate Preview" />

            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateCard;
