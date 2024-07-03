import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

import { ArrowTopRightIcon } from '@radix-ui/react-icons';

export default function Login() {
  return (
    <div className='w-full lg:min-h-[600px] xl:min-h-[800px]'>
      <div className='flex items-center justify-center py-12'>
        <div className='mx-auto grid w-[350px] gap-6'>
          <div className='grid gap-2'>
            <h1 className='text-3xl font-bold text-green-700 text-left'>
              Login
            </h1>
            <p className='text-balance text-muted-foreground text-zinc-800 font-semibold'>
              Hi, Welcome back 👋
            </p>

            <Button className='font-semibold mt-2' variant='outline'>
              Login with Google
            </Button>
            <div className='mt-3 items-center grid gap-2 grid-cols-3 text-gray-200'>
              <Separator />
              <p className='text-balance text-xs text-muted-foreground font-semibold'>
                or Login with Email
              </p>
              <Separator />
            </div>
          </div>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='email' className='font-semibold'>
                Email
              </Label>
              <Input
                id='email'
                type='email'
                placeholder='m@example.com'
                required
              />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label className='font-semibold' htmlFor='password'>
                  Password
                </Label>
                <Link
                  href='/forgot-password'
                  className='ml-auto inline-block text-sm underline'
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id='password' type='password' required />
            </div>
            <Button type='submit' className='w-full'>
              Login
            </Button>
          </div>
          <div className='mt-4 text-center text-sm'>
            Not registered yet?{' '}
            <Link href='#' className='text-blue-600 font-semibold'>
              Create an account
              <ArrowTopRightIcon className='font-bold inline-block w-4 h-4 ml-1' />
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div> */}
    </div>
  );
}
