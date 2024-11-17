
//         const heading =  React.createElement("h1" ,{}, "hello world from react!");
//        const heading= React.createElement("h1",{id:"heading",xyz:"gegh"}, "helloworld from react!")


        // nested elements 

        // <div className="heading">
        //         <div className="child">
                        // <h1>im h1 tag</h1>
                        // <h1>i am second h1 tag</h1>
        //         </div>
        // </div>


        // const heading=React.createElement("div",{id:"heading"},
        //         React.createElement("div",{id:"child"},
        //                 React.createElement("h1",{},"im h1 tag")
        //         )
        // );

        const heading=React.createElement("div",{id:"heading"},
               [ React.createElement("div",{id:"child1"},
                       [ React.createElement("h1",{},"i am h1 tag"), React.createElement("h1",{},"i am second h1 tag")]
                ), 
                React.createElement("div",{id:"child2"},
                        [ React.createElement("h1",{},"i am h1 tag"), React.createElement("h1",{},"i am second h1 tag")]
                 )]
        );

        console.log(heading);
       const root= ReactDOM.createRoot(document.getElementById("root"))
        root.render(heading);
    
