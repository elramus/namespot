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
            'first_name' => 'Demo',
            'last_name' => 'Website!',
            'role' => 'dev',
            'cnet_id' => 'demo',
        ]);
    }
}
