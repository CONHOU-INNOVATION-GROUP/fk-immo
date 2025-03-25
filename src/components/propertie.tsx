"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import React from "react"
import { Star } from "lucide-react";

export const Property = ()=>{

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    React.useEffect(() => {
        if (!api) {
          return
        }
    
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
    
        api.on("select", () => {
          setCurrent(api.selectedScrollSnap() + 1)
        })
      }, [api])

      const images = [
        { src: "properties/vridi 3.jpg", rating: 5 },
        { src: "properties/vridi 4.jpg", rating: 3 },
        { src: "properties/vridi.2.jpg", rating: 3 },
        { src: "properties/vridi.jpg", rating: 4 },
        { src: "properties/10eme.2.jpg", rating: 4 },
        { src: "properties/binger-7.jpg", rating: 4 },
        { src: "properties/10-eme-1.jpg", rating: 4 },
        { src: "properties/10-eme-3.jpg", rating: 5 },
        // { src: "properties/binger-6.jpg", rating: 4 },
        // { src: "properties/10eme.2.jpg", rating: 4 },
        // { src: "properties/binger-3.jpg", rating: 4 },
        // { src: "properties/10eme4.jpg", rating: 4 },

      ];

    return (
        <section className=" mb-12" id="properties">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-6">Nos Propriétés à la Une</h1>

                <p className="text-gray-600 font-medium text-center mb-12">Explorez nos biens d’exception, sélectionnés pour leur emplacement et leur design</p>
                <div className="w-full justify-center items-center h-auto mb-12 flex flex-col-reverse md:flex-row  ">
                    {/* <div className=" sm:w-1/2 h-[400px]">
                        <img src="properties/p-une-1.png" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full sm:w-1/2 h-[400px]">
                        <div className="w-full h-[400px] flex justify-around items-center bg-blue-200">
                            <img src="properties/p-une-2.png" alt="" className="w-[15rem] h-[15rem]" />
                            <img src="properties/p-une-3.png" alt="" className="w-[15rem] h-[15rem]" />
                        </div>
                        <div>

                        </div>
                    </div> */}
                    

                    {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="properties/p-une-1.png" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="properties/10eme.2.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="properties/p-une-3.png" alt="" />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="properties/10eme4.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="properties/p-une-2.png" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="properties/p-une-3.png" alt="" />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="properties/10eme.3.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="properties/p-une-3.png" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="properties/p-une-1.png" alt="" />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="properties/p-une-2.png" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="properties/p-une-3.png" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="properties/p-une-1.png" alt="" />
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="properties/p-une-1.png" alt="" />
                                <div className="flex justify-center mt-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="properties/10eme.2.jpg" alt="" />
                                <div className="flex justify-center mt-2">
                                    {[1, 2, 3, 4].map((star) => (
                                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="properties/p-une-3.png" alt="" />
                                <div className="flex justify-center mt-2">
                                    {[1, 2, 3].map((star) => (
                                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="properties/10eme4.jpg" alt="" />
                                <div className="flex justify-center mt-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="properties/p-une-2.png" alt="" />
                                <div className="flex justify-center mt-2">
                                    {[1, 2, 3, 4].map((star) => (
                                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="properties/p-une-3.png" alt="" />
                                <div className="flex justify-center mt-2">
                                    {[1, 2, 3].map((star) => (
                                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="properties/10eme.3.jpg" alt="" />
                                <div className="flex justify-center mt-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="properties/p-une-3.png" alt="" />
                                <div className="flex justify-center mt-2">
                                    {[1, 2, 3].map((star) => (
                                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="properties/p-une-1.png" alt="" />
                                <div className="flex justify-center mt-2">
                                    {[1, 2, 3, 4].map((star) => (
                                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="properties/p-une-2.png" alt="" />
                                <div className="flex justify-center mt-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="properties/p-une-3.png" alt="" />
                                <div className="flex justify-center mt-2">
                                    {[1, 2, 3].map((star) => (
                                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {images.map((image, index) => (
                            <div key={index} className="relative">
                            <img className="h-auto max-w-full rounded-lg" src={image.src} alt="" />
                            {/* Conteneur des étoiles (positionné en haut à gauche) */}
                            <div className="absolute top-2 left-2 bg-black bg-opacity-50 px-2 py-1 rounded-lg flex">
                                {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} className={i < image.rating ? "text-yellow-400" : "text-gray-400"} />
                                ))}
                            </div>
                            </div>
                        ))}
                    </div>
                   
                </div>
            </div>
        </section>
    )
}



