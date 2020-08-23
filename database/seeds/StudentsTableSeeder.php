<?php

use Faker\Generator as Faker;
use Illuminate\Database\Seeder;

class StudentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $offering = App\Offering::findOrFail(1);

        $images = [
            'worf.jpg',
            'picard.jpg',
            'laforge.jpg',
            'troi.jpg',
            'b_crusher.jpg',
            'w_crusher.jpg',
            'riker.jpg',
            'yar.jpg',
            'data.jpg',
            'guinan.jpg',
            'q.jpg',
            'barclay.jpg',
            'hugh.jpg',
            'galron.jpg',
            'obrien.jpg',
            'lwaxana.webp',
            'ro.webp',
        ];

        // Build an array of seats to loop through.
        $seats = [];
        $tables = App\Table::all();
        foreach ($tables as $table) {
            for ($i = 0; $i < $table->seat_count; $i += 1) {
                $seats[] = "{$table->id}_{$i}";
            }
        }

        factory(App\Student::class, 17)
            ->create()
            ->each(function($student, $i) use($offering, $images, $seats) {
                $student->picture = $images[$i];
                $student->save();
                $student->offerings()->attach($offering->id, [
                    'is_in_ais' => 1,
                    'assigned_seat' => $seats[$i],
                ]);
            });
    }
}
