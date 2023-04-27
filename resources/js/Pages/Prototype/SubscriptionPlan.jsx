import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AuthenticatedLayout from '@/Layouts/Authenticated/AuthenticatedLayout'
import SubscriptionCard from '@/Components/Dashboard/SubscriptionCard'

const SubscriptionPlan = () => {
    // isPremium is boolean, the dafault is false
    return (
        <AuthenticatedLayout>
            {/* <div className="ml-[300px] px-[50px]"> */}
            <div className="py-5 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from movies.
                </p>

                <div className="flex justify-center gap-10 mt-[70px]">
                    <SubscriptionCard name="Basic" price={299000} durationInMonth={3} features={['Feature 1', 'Feature 2', 'Feature 3']} />

                    <SubscriptionCard isPremium name="Premium" price={899000} durationInMonth={3} features={['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5']} />
                </div>
            </div>
            {/* </div> */}
        </AuthenticatedLayout>
    )
}

SubscriptionPlan.propTypes = {}

export default SubscriptionPlan