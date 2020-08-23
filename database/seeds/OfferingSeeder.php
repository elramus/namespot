<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OfferingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('offerings')->insert([
            'long_title' => 'Seating Chart - DEMO',
            'term_code' => '2208',
            'room_id' => 1,
        ]);
    }
}
