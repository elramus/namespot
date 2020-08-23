<?php

use Illuminate\Database\Seeder;

class InstructorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $offering = App\Offering::find(1);

        factory(App\Instructor::class, 2)
            ->create()
            ->each(function ($inst) use($offering) {
                $inst->teaches()->attach($offering);
            });
    }
}
