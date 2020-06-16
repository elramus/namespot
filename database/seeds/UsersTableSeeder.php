<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class)->create([
            'first_name' => 'Luke',
            'last_name' => 'Ramus',
            'role' => 'dev',
            'cnet_id' => 'dramus',
        ]);
    }
}
