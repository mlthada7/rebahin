import React, { useEffect, useRef } from 'react'
import AuthenticatedLayout from '@/Layouts/Authenticated/AuthenticatedLayout'
import FeaturedMovie from '@/Components/Dashboard/FeaturedMovie'
import MovieCard from '@/Components/Dashboard/MovieCard'
import Flickity from 'react-flickity-component'
import { Head } from '@inertiajs/react'

const Dashboard = ({ auth, featuredMovies, movies }) => {
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
        <AuthenticatedLayout user={auth.user}>
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
                    {featuredMovies.map((featuredMovie) => (
                        <FeaturedMovie key={featuredMovie.id}
                            slug={featuredMovie.slug}
                            name={featuredMovie.name}
                            category={featuredMovie.category}
                            rating={featuredMovie.rating}
                            thumbnail={featuredMovie.thumbnail} />
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
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            slug={movie.slug}
                            name={movie.name}
                            category={movie.category}
                            thumbnail={movie.thumbnail} />
                    ))}
                </Flickity>
            </div>
        </AuthenticatedLayout >
    )
}

export default Dashboard