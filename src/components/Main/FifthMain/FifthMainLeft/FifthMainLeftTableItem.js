const FifthMainLeftTableItem = (props) => {
  return (
    <div className="flex w-full items-center border-t-[.5px] py-5 border-t-[#5a595f]">
      <div className="flex items-center w-[45%]">
        <span className="mr-4">{props.icon}</span>
        <span className="text-white text-sm font-bold">{props.title}</span>
      </div>
      <div className="w-[15%]">
        <img
          src={props.img}
          alt={props.title}
          className="w-[17px] rounded-full"
        />
      </div>
      <h3 className="text-white font-bold text-[13px] w-[18%]">
        {props.price}
      </h3>
      <div className="flex flex-col justify-between w-[20%]">
        <h3 className="font-bold text-white text-sm mb-1">{props.percent}</h3>
        <div className="w-full h-[2px] bg-gray-700 flex items-center">
          <div className={"h-[6px] bg-[#0075ff] rounded-md " + props.divStyle}></div>
        </div>
      </div>
    </div>
  );
};

export default FifthMainLeftTableItem;
