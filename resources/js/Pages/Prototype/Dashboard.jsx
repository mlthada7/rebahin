import React, { useEffect, useRef } from 'react'
import Flickity from 'react-flickity-component'
import { Head } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/Authenticated/AuthenticatedLayout'
import FeaturedMovie from '@/Components/Dashboard/FeaturedMovie'
import MovieCard from '@/Components/Dashboard/MovieCard'

const Dashboard = () => {
    const flickityRef = useRef(null)
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1"
    }

    useEffect(() => {
        // wait for the component to mount and for the element to load before initiolizing Flickity
        if (flickityRef.current) {
            flickityRef.current.on('ready', function () {
                console.log('Flickity is ready');
            });
        }
    }, [flickityRef])

    return (
        <AuthenticatedLayout>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
                <title>Dashboard</title>
            </Head>
            {/* Featured Movies */}
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                <Flickity className="gap-[30px]" options={flickityOptions}
                    elementType="div"
                    disableImagesLoaded={false}
                    reloadOnUpdate
                    static
                    flickityRef={(c) => flickityRef.current = c}
                >
                    {[1, 2, 3].map(i => (
                        <FeaturedMovie key={i} slug={`featured-movie-${i}`} name={`Featured Movie ${i}`} category="Action" rating={i + 1} thumbnail={`/images/featured-${i}.png`} />
                    ))}
                    {/* https://picsum.photos/id/1/300/300 */}
                </Flickity>
            </div>

            {/* Browse Movies */}
            <div className='mt-[50px]'>
                <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
                <Flickity className="gap-[30px]" options={flickityOptions}
                    elementType="div"
                    disableImagesLoaded={false}
                    reloadOnUpdate
                    static
                    flickityRef={(c) => flickityRef.current = c}
                >
                    {[1, 2, 3, 4, 5].map(i => (
                        <MovieCard key={i} slug={`movie-${i}`} name={`Movie ${i}`} category='Horror' thumbnail={`/images/browse-${i}.png`} />
                    ))}
                </Flickity>
            </div>
        </AuthenticatedLayout >
    )
}

export default Dashboard