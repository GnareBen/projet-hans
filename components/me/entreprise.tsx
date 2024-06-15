import Image from "next/image";

export const Entreprise = () => {
    return (
        <section className="mb-24 container mx-auto">
            <div className="mb-24">
                <h2 className="text-center text-5xl font-bold mb-12 text-blue-700">NGATCHI</h2>
                <div className="grid grid-cols-2 space-x-10 justify-between items-center">
                    <div className="">
                        <Image
                            className="w-full rounded-lg"
                            src="/images/home/600x400.png"
                            alt="mockup"
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className="text-gray-400 w-full">
                        <p className="text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorum eaque impedit
                            magnam tempora. Accusamus alias beatae cupiditate doloremque et eveniet ex nemo similique
                            voluptatem? Ad amet aspernatur, atque dignissimos doloremque dolorum enim eos eum facere
                            ipsum iste laboriosam molestiae nisi odio odit perferendis quo rerum suscipit totam ullam
                            voluptas.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur dicta
                            exercitationem ipsam nesciunt omnis voluptates! Aliquid, aperiam deleniti exercitationem
                            inventore ipsa ipsam nobis omnis quos ratione, repellendus sed sint voluptatem. Accusamus
                            culpa cumque debitis dolorem earum excepturi illum, ipsam ipsum iure iusto laboriosam
                            placeat porro, repellendus sapiente sint sit sunt vel voluptate.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mb-24">
                <h2 className="text-center text-5xl font-bold mb-12 text-blue-700">LES DELICES DE KAYLIE</h2>
                <div className="grid grid-cols-2 space-x-10 justify-between items-center">
                    <div className="text-gray-400 w-full">
                        <p className="text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorum eaque impedit
                            magnam tempora. Accusamus alias beatae cupiditate doloremque et eveniet ex nemo similique
                            voluptatem? Ad amet aspernatur, atque dignissimos doloremque dolorum enim eos eum facere
                            ipsum iste laboriosam molestiae nisi odio odit perferendis quo rerum suscipit totam ullam
                            voluptas.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur dicta
                            exercitationem ipsam nesciunt omnis voluptates! Aliquid, aperiam deleniti exercitationem
                            inventore ipsa ipsam nobis omnis quos ratione, repellendus sed sint voluptatem. Accusamus
                            culpa cumque debitis dolorem earum excepturi illum, ipsam ipsum iure iusto laboriosam
                            placeat porro, repellendus sapiente sint sit sunt vel voluptate.
                        </p>
                    </div>
                    <div className="">
                        <Image
                            className="w-full rounded-lg"
                            src="/images/home/600x400.png"
                            alt="mockup"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
            <div className="mb-24">
                <h2 className="text-center text-5xl font-bold mb-12 text-blue-700">JADEN EVENT</h2>
                <div className="grid grid-cols-2 space-x-10 justify-between items-center">
                    <div className="">
                        <Image
                            className="w-full rounded-lg"
                            src="/images/home/600x400.png"
                            alt="mockup"
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className="text-gray-400 w-full">
                        <p className="text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorum eaque impedit
                            magnam tempora. Accusamus alias beatae cupiditate doloremque et eveniet ex nemo similique
                            voluptatem? Ad amet aspernatur, atque dignissimos doloremque dolorum enim eos eum facere
                            ipsum iste laboriosam molestiae nisi odio odit perferendis quo rerum suscipit totam ullam
                            voluptas.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur dicta
                            exercitationem ipsam nesciunt omnis voluptates! Aliquid, aperiam deleniti exercitationem
                            inventore ipsa ipsam nobis omnis quos ratione, repellendus sed sint voluptatem. Accusamus
                            culpa cumque debitis dolorem earum excepturi illum, ipsam ipsum iure iusto laboriosam
                            placeat porro, repellendus sapiente sint sit sunt vel voluptate.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}