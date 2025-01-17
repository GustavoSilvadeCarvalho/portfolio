import { Facebook, Github, Twitter } from 'lucide-react';

export function Footer() {
    return (
        <footer className="flex justify-between border">
            <div className='flex'>
                <h3 className='border h-full py-3 px-4'>find me in:</h3>
                <div className='flex items-center h-full border px-4'>
                    <Twitter />
                </div>
                <div className='flex items-center h-full border px-4'>
                    <Facebook />
                </div>
            </div>
            <div className='flex items-center border py-3 px-5 gap-2'>
                <h3>@GustavoCarvalho</h3>
                <Github />
            </div>

        </footer>
    );
}