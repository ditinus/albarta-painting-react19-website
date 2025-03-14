import React from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

 const ContactFormSection = () => {
  return (
    <div className=' container mx-auto px-4 py-8 '>  <div className="grid md:grid-cols-2 gap-8 lg:my-20 my-10 ">
    <div className="flex flex-col justify-center w-full  lg:w-[70%] ">
      <h2 className="text-[26px] lg:text-[45px] font-bold text-[#0D378D] uppercase mb-2">
        Have a project in  mind or need a quote?
      </h2>
      <p className="text-muted-foreground mb-4 text-black">
        {`Let us know what your project involves  in Calgary, and we'll respond
        to your inquiry as soon as we can.`}
      </p>
    </div>

    <div>
      <form className="space-y-14 bg-yellow-50 shadow-2xl p-5 ">
        <div className="grid grid-cols-1 gap-8">
          <Input className=" border-0 bg-[#F3F3F3] text-black" placeholder="Name" />
          <Input  className=" border-0 bg-[#F3F3F3] text-black"  placeholder="Email address" type="email" />
          <Input   className=" border-0 bg-[#F3F3F3] text-black"  placeholder="Phone number" type="tel" />
          <Textarea  className=" border-0 bg-[#F3F3F3] text-black"  placeholder="Message" rows={4} />
          <Button className="w-full bg-[#0D378D] hover:bg-primary/90 text-white">
            Get a Quote
          </Button>
        </div>
      </form>
    </div>
  </div></div>
  )
}

export default ContactFormSection