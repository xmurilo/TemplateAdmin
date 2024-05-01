export default function Logo() {
  return (
    <div className={` flex flex-col  items-center justify-center rounded-full h-10 w-10 bg-[#FFFBF5]`}>
      <div className={` h-3 w-3 rounded-full bg-[#FD4056] mb-0.5 `} />
      <div className={`flex mt-1`}>
        <div className={` h-3 w-3 rounded-full bg-[#41C7FB] mr-0.5 `} />
        <div className={` h-3 w-3 rounded-full bg-[#CF3BE9] ml-0.5`} />
      </div>
    </div>
  );
}
