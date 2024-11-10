
'use client';
import Image from 'next/image';
import Contact from '../../../ui/contact';
import { useParams } from 'next/navigation';
import machines from '@/app/utils/data';
export default function Page() {
    const { id } = useParams();
    const machine = machines.find(machine => machine.id == Number(id))
    return(
        <>
             <section id="about" className="about section">
                <div className="container">
                <div className="row gy-4 gx-5">
                    <div
                    className="col-lg-6 position-relative align-self-start"
                    data-aos="fade-up"
                    data-aos-delay={200}
                    >
                    <Image
                        src={machine?.image ?? ""}
                        className="img-fluid"
                        alt=""
                        width={500}
                        height={500}
                    />
                    </div>
                    <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay={100}>
                    <h3>{machine?.name}</h3>
                    <ul className="detail-ul">
                        {machine?.description.map((m, index) =>
                            <li key={index}>{m}</li>
                        )}
                        </ul>
                    </div>
                </div>
                </div>
            </section>
            <Contact/>
        </>
    )
}