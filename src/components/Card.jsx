import { HiOutlinePlus } from "react-icons/hi";
const Card = ({ content }) => {
  return (
    <>
      <div className="bg-white :mdw-36 h-10 md:h-12 rounded-lg flex items-center p-2 md:p-4  mt-2">
        <div>
          {" "}
          <HiOutlinePlus
            className="text-blue-500 text-lg mr-3 md:mr-4"
            size={22}
          />
        </div>
        <div className="text-[10px] md:text-xs font-extrabold text-gray-800">
          {content}
        </div>
      </div>
    </>
  );
};

export default Card;
