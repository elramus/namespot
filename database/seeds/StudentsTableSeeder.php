<?php

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

        $offering->students()->save(factory(App\Student::class)->create([
            'first_name' => 'Jean-Luc',
            'last_name' => 'Picard',
        ]), ['is_in_ais' => 1]);
        $offering->students()->save(factory(App\Student::class)->create([
            'first_name' => 'William',
            'last_name' => 'Riker',
            'nickname' => 'Will',
        ]), ['is_in_ais' => 1]);
        $offering->students()->save(factory(App\Student::class)->create([
            'first_name' => 'Geordi',
            'last_name' => 'La Forge',
        ]), ['is_in_ais' => 1]);
        $offering->students()->save(factory(App\Student::class)->create([
            'first_name' => 'Tasha',
            'last_name' => 'Yar',
        ]), ['is_in_ais' => 1]);
        $offering->students()->save(factory(App\Student::class)->create([
            'first_name' => 'Worf',
        ]), ['is_in_ais' => 1]);
        $offering->students()->save(factory(App\Student::class)->create([
            'first_name' => 'Deanna',
            'last_name' => 'Troi',
        ]), ['is_in_ais' => 1]);
        $offering->students()->save(factory(App\Student::class)->create([
            'first_name' => 'Data',
        ]), ['is_in_ais' => 1]);
        $offering->students()->save(factory(App\Student::class)->create([
            'first_name' => 'Wesley',
            'last_name' => 'Crusher',
        ]), ['is_in_ais' => 1]);
    }
}
