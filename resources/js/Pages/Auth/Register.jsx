import InputError from '@/Components/InputError'
import Button from '@/Components/Login/Button'
import Input from '@/Components/Login/Input'
import Label from '@/Components/Login/Label'
import { Head, Link, useForm } from '@inertiajs/react'
import React, { useEffect } from 'react'

const Register = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, [errors]);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };
    // console.log(errors);

    return (
        <>
            <Head title='Sign up' />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt="" />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label forInput='fullname' value='Full Name' />
                                    <Input id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Your fullname..."
                                        value={data.name}
                                        isFocused={true}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>
                                <div>
                                    <Label forInput='email' value='Email Address' />
                                    <Input id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Your Email Address"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        required />
                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div>
                                    <Label forInput='password' value='Password' />
                                    <Input id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Your Password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        required />
                                    <InputError message={errors.password} className="mt-2" />
                                </div>
                                <div>
                                    <Label forInput='password_confirmation' value='Password Confirmation' />
                                    <Input id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        placeholder="Your Password"
                                        value={data.password_confirmation}
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        required />
                                    <InputError message={errors.password_confirmation} className="mt-2" />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Button type='submit' variant='primary' disabled={processing}>
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </Button>
                                <Link href={route('login')}>
                                    <Button type='button' variant='light-outline'>
                                        <span className="text-base text-white">
                                            Sign In to My Account
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register