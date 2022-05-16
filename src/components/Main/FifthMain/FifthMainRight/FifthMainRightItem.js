const FifthMainRightItem = (props) => {
  return (
    <div className="flex mt-8 items-center">
      <span className="mr-5">{props.icon}</span>
      <div>
          <h3 className="text-white font-bold text-[14px]">{props.title}</h3>
          <span className="text-[#86848e] text-[12px] font-bold">{props.content}</span>
      </div>
    </div>
  );
};

export default FifthMainRightItem;
