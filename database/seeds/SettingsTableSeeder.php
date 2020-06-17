<?php

use Illuminate\Database\Seeder;

class SettingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Setting::class)->create([
            'setting_name' => 'academic_year',
            'setting_value' => '2020',
        ]);
        factory(App\Setting::class)->create([
            'setting_name' => 'catalog_prefix',
            'setting_value' => 'Demo',
        ]);
        factory(App\Setting::class)->create([
            'setting_name' => 'school_name',
            'setting_value' => 'Namespot Demo',
        ]);
    }
}
