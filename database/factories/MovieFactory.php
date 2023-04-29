<?php

namespace Database\Factories;

// use App\Models\Movie;
use Illuminate\Database\Eloquent\Factories\Factory;
use Xylis\FakerCinema\Provider\Movie;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Movie>
 */
class MovieFactory extends Factory
{
    // protected $model = Movie::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = \Faker\Factory::create();
        $faker->addProvider(new \Xylis\FakerCinema\Provider\Movie($faker));

        $thumbnail = "https://source.unsplash.com/random/200×300/?";
        // $thumbnail = "https://loremflickr.com/320/240/";
        $videoId = Str::random(11);
        $videoUrl = "https://www.youtube.com/watch?v=$videoId";

        return [
            'name' => $faker->movie,
            'category' => $faker->movieGenre,
            'slug' => $faker->slug(),
            // 'video_url' => $faker->url(),
            'video_url' => $videoUrl,
            'thumbnail' => function (array $attributes) use ($thumbnail) {
                return $thumbnail . urlencode($attributes['name']);
            },
            // 'thumbnail' => fake()->imageUrl(640, 480, null, true, 'Football'),
            // 'thumbnail' => $faker->imageUrl(640, 480, function (array $attributes) {
            //     return $attributes['name'];
            // }),
            'rating' => $faker->randomFloat(1, 7, 9),
            // 'is_featured' => fake()->boolean
        ];
    }

    public function featured(): Factory
    {
        return $this->state(function (array $attributes) {
            return [
                'is_featured' => 1,
            ];
        });
    }
}
