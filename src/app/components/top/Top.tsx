// "use client";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './top.css';

// const Top = () => {
    
//     const repeatedText = "Special Discount 20% >>>>>>>>> ";

//     return (
//         <div className="container-fluid top-container">
//             <div className="row d-flex justify-content-center align-items-center top-row">
//                 <div
//                     className="col text-center"
//                     style={{
//                         color: "#ffffff",
//                         fontWeight: 500,
//                         fontSize: "16px",
//                         fontFamily: "Poppins",
//                     }}
//                 >
//                     <div className="scrolling-text">
//                         {Array(25).fill(repeatedText).map((_, index) => (
//                             <span key={index} className="text-item">
//                                 {repeatedText}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Top;

// "use client";

"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import './top.css';

const Top = () => {
    // The repeated text
    const repeatedText = "Special Discount 20% >>>>>>>>> ";

    return (
        <div className="container-fluid top-container">
            <div className="row d-flex justify-content-center align-items-center top-row">
                <div
                    className="col text-center"
                    style={{
                        color: "#ffffff",
                        fontWeight: 500,
                        fontSize: "16px",
                        fontFamily: "Poppins",
                    }}
                >
                    <div className="scrolling-text">
                        {/* Using span for each repeated text */}
                        {Array(20).fill(repeatedText).map((_, index) => (
                            <span key={index} className="text-item">
                                {repeatedText}
                            </span>
                        ))}
                        {/* Duplicating the text for seamless scrolling */}
                        {Array(20).fill(repeatedText).map((_, index) => (
                            <span key={index + 20} className="text-item">
                                {repeatedText}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;



