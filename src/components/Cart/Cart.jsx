/* eslint-disable react/prop-types */
const Cart = ({selectLanguages}) => {
    console.log(selectLanguages)
    return (
        <div className="">
            <h3 className="pl-3 text-lg font-bold text-blue-600 pt-3">Credit Hour Remaining 7 hr</h3>
            <h3 className="pl-3 text-2xl font-bold pb-5 mt-6 border-t-2">Course Name</h3>
            {
                selectLanguages.map(language => (
                <li className="pl-3" key={language.id}>{language.title}</li>
                ))
                
            }
            <h3 className="pl-3 pt-[80px] pb-14 text-xl ">Total Credit Hour : </h3>
        </div>
    );
};

export default Cart;