<?php

use Illuminate\Database\Seeder;

class RoomsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
    */
    public function run()
    {
        $room = factory(\App\Room::class)->create([
            'seat_size' => 100,
            'name' => 'The Bridge',
        ]);
        $offering = \App\Offering::first();
    }
}
