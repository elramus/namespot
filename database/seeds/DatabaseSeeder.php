<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            OfferingSeeder::class,
            UsersTableSeeder::class,
            SettingsTableSeeder::class,
            RoomsTableSeeder::class,
            TablesTableSeeder::class,
            StudentsTableSeeder::class,
        ]);
    }
}
