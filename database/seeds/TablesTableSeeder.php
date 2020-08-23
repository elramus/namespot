<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TablesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $theBridgeTables = [
            [
                'room_id' => 1,
                'seat_count' => 7,
                'sX' => 7,
                'sY' => 7,
                'eX' => 71,
                'eY' => 7,
                'qX' => 39,
                'qY' => 0,
                'label_position' => 'below',
            ], [
                'room_id' => 1,
                'seat_count' => 4,
                'sX' => 52,
                'sY' => 18,
                'eX' => 26,
                'eY' => 18,
                'qX' => 39,
                'qY' => 15,
                'label_position' => 'below',
            ], [
                'room_id' => 1,
                'seat_count' => 2,
                'sX' => 32,
                'sY' => 35,
                'eX' => 45,
                'eY' => 35,
                'qX' => null,
                'qY' => null,
                'label_position' => 'above',
            ], [
                'room_id' => 1,
                'seat_count' => 2,
                'sX' => 2,
                'sY' => 20,
                'eX' => 7,
                'eY' => 31,
                'qX' => 1,
                'qY' => 27,
                'label_position' => 'right',
            ], [
                'room_id' => 1,
                'seat_count' => 2,
                'sX' => 75,
                'sY' => 20,
                'eX' => 70,
                'eY' => 31,
                'qX' => 76,
                'qY' => 27,
                'label_position' => 'left',
            ]
        ];
        DB::table('tables')->insert($theBridgeTables);
    }
}
