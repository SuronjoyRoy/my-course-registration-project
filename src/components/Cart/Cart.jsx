/* eslint-disable react/prop-types */
const Cart = ({selectLanguage, remaining, totalHr}) => {

    return (
        <div className="">
            <h3 className="pl-3 text-lg font-bold text-blue-600 pt-3">Credit Hour Remaining {remaining} hr</h3>
            <h3 className="pl-3 text-2xl font-bold pb-5 mt-6 border-t-2">Course Name</h3>
            {
                selectLanguage.map(language => (
                <li className="pl-3" key={language.id}>{language.title}</li>
                ))
                
            }
            <div className="border-t-1 mt-5"></div>
            <hr />
            <h3 className="pl-3 pt-[20px] font-medium pb-1 text-xl ">Total Credit Hour :{totalHr} </h3>
            <h3 className="pl-3 pt-[20px] font-medium pb-14 text-xl ">Total Price : </h3>
        </div>
    );
};

export default Cart;