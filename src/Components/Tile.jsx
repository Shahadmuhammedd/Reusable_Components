import React from "react";

function Tile() {
  const data = [
    {
      Image:
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
      number: "24K",
      content: "Total Users",
    },
    {
      Image:
        "https://img.freepik.com/premium-vector/social-network-concept-3d-illustration-icon-composition-with-website-interface-with-user-profiles-online-chat-program-online-communication-computer-vector-illustration-modern-web-design_198565-1671.jpg",
      number: "82K",
      content: "Online",
    },
    {
      Image:
        "https://img.freepik.com/premium-vector/3d-cartoon-character-young-woman-call-center-customer-service-using-laptop_40876-3097.jpg?semt=ais_hybrid",
      number: "200",
      content: "Service Request",
    },
    {
      Image:
        "https://img.freepik.com/free-photo/business-woman-with-smile-her-face-3d-render-illustration_1142-38963.jpg?t=st=1729782310~exp=1729785910~hmac=91fe82738c2bd16c63d094d09369c46fc625420280e00c23fbf4b4128e81a0d9&w=826",
      number: "89",
      content: "Lead Request",
    },
    {
      Image:
        "https://img.freepik.com/free-photo/view-3d-business-couple_23-2150709992.jpg?t=st=1729782348~exp=1729785948~hmac=c3ea842b457306cac6394051ace4ebcee684e9dd0eacec2086653cdd47aa765e&w=826",
      number: "89",
      content: "Active Service",
    },
    {
      Image:
        "https://img.freepik.com/free-photo/3d-cartoon-business-character_1048-16497.jpg?t=st=1729782687~exp=1729786287~hmac=7240aef911e63c3d44b04357ce3bbce5f12bad4a696c25f720ec40e190cf5521&w=826",
      number: "89",
      content: "Complaints",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-3 justify-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white w-[160px] h-[80px] rounded-2xl mb-4 shadow-2xl flex items-center p-4 transition-transform duration-300 transform hover:scale-105"
          >
            <img
              src={item.Image}
              className="w-12 h-12 rounded-full"
              alt="User"
            />
            <div className="flex flex-col ml-3">
              <span className="text-lg font-bold font-number">
                {item.number}
              </span>
              <p className="text-sm text-gray-500 font-sans">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tile;
