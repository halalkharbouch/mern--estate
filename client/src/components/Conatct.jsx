import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Conatct({ listing }) {
  const [Landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLandlord();
  }, [listing.userRef]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      {Landlord && (
        <div className="flex flex-col gap-2">
          <p>
            Contact <span className="font-semibold">{Landlord.username}</span>{" "}
            for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={handleChange}
            placeholder="Enter your Message here"
            className="w-full border p-3 rounded-lg"
          ></textarea>
          <Link className="bg-slate-700 text-white text-center uppercase rounded-lg hover:opacity-95 p-3" to={`mailto:${Landlord.email}?subject=Regarding ${listing.name}&body=${message}`}>
            Send Message
          </Link>
        </div>
      )}
    </>
  );
}
