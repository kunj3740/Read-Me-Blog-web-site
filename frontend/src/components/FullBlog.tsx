// import { Appbar } from "./Appbar"
// import { Blog } from "../hooks"
// import { Avatar } from "./BlogCard"

// export const FullBlog = ({blog} : {blog:Blog}) => {
//     return <div>
//         <Appbar />
//         <div className="flex justify-center">
//     <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt=12">
//          <div className=" col-span-8">
//             <div className="text-5xl font-extrabold">
//                 {blog.title}
//             </div>
//             <div className="text-slate-500 pt-2">
//                  Post on 2nd December 2023
//             </div>
//             <div className="pt-8">
//                 {blog.content}
//             </div>
//          </div>
//          <div className="  col-span-4">
//             <div className="text-slate-600 text-lg">
//                 Author
//             </div>
//             <div className="flex  w-full">
//                 <div className="pr-4 flex flex-col justify-center ">
//                   <Avatar size ="small" name={blog.author.name || "Anonymous"} />
//                 </div>
//                 <div>
//                     <div className="text-xl font-bold">
//                     {blog.author.name || "Anonymous"}
//                     </div>
//                     <div className="pt-2 text-slate-500">
//                         Random catch  pharse about the author's ability to grab the user's attention
//                     </div>
//                 </div>
//             </div>

//          </div>
         
//     </div>
//     </div>
//     </div>
// }



import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

const formatDate = (date: string | Date): string => {
    const dateObj = (typeof date === "string") ? new Date(date) : date;
    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    };
    return dateObj.toLocaleDateString('en-GB', options);
};


export const FullBlog = ({ blog }: {blog: Blog}) => {
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-5 w-full max-w-screen-xl pt-8">
                <div className="col-span-12 md:col-span-8">
                    <div className="text-3xl md:text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                       {formatDate(blog.publishedDate)}
                    </div>
                    <div className="pt-4 whitespace-break-spaces">
                        {blog.content}
                    </div>
                </div>
                <div className="md:col-span-4 hidden md:visible md:ml-16">
                    <div className="text-slate-600 text-lg">
                        Author
                    </div>
                    <div className="flex w-full">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar size="big" name={blog.author.name || "Anonymous"} />
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                Random catch phrase about the author's ability to grab the user's attention
                            </div>
                        </div>
                    </div>  
                </div>
                
            </div>
        </div>
        <div className="h-[50px]"></div>
    </div>
}