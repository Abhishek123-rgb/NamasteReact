export const Restrocard = (props) => {
  return (
    <div className="border-solid border-4 border-gray-200 mb-3 rounded-xl p-4 w-60">
      <img
        className="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF-ldNnZb_CXlYmOVrmh69OrZ1MpK9QnLA9A&usqp=CAU"
        alt="biryani pic"
      />
      <h1>{props?.data?.data?.name}</h1>
      <h4>{props?.data?.data?.area}</h4>
      <h4>{props?.data?.data?.avgRating}</h4>
      <h4>{props?.data?.data?.maxDeliveryTime}</h4>
    </div>
  );
};

// export default Restrocard
