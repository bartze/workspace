import { createBrowserRouter} from "react-router-dom";
import PublicLoyout from "./routes/publicLayout";
import Clock from "./routes/Clock";
import TableUsers from "./routes/TableUsers";

// Define rutas usando un array de objetos
// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <div>Hello Mando</div>, 
//     },
//   ]);
  
// Define rutas usando JSX en React
//   const router = createBrowserRouter(createRoutesFromElements(
//     <Route
//         path="/"
//         element={<div>Hello Mando</div>}
//     />
//   )
// );

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Root />,
//         errorElement: <ErrorPage />,
//         loader: rootLoader,
//         action: rootAction,
//         children: [
//             {
//                 errorElement: <ErrorPage />,
//                 children: [
//                     { index: true, element: <Index /> },
//                     {
//                         path: "contacts/:contactId",
//                         element: <Contact />,
//                         loader: contactLoader,
//                         action: contactAction, 
//                     },
//                     {
//                         path: "contacts/:contactId/edit",
//                         element: <EditContact />,
//                         loader: contactLoader,
//                         action: editAction,
//                     },
//                     {
//                         path: "contacts/:contactId/destroy",
//                         action: destroyAction,
//                         errorElement: <div>Oops! There war an error</div>
//                     },
//                 ],
//             },
//         ],
//     }
// ]);

const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLoyout />,
        children: [
            {
                path: "clock",
                element: <Clock />,
            },
            {
                path: "people",        
                element: <TableUsers />,
            },
        ],
    },
]);

export default router;
