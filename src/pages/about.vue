<script setup lang="ts">
definePageMeta({
    middleware: "auth",
});

useHead({
    title: "A propos - Sophia Hack Lab",
});
</script>

<template>
    <div class="px-5 md:px-20 flex flex-col w-full pt-32 h-full min-h-screen max-w-7xl mt-10">
        <div class="w-full flex items-center flex-col gap-12">
            <div class="flex flex-col gap-10 max-w-xl">
                <h1
                    class="text-4xl text-center font-bold uppercase text-white whitespace-nowrap text-shadow shadow-white"
                >
                    A propos du SHL
                </h1>
                <p class="text-white/70 text-left">
                    Le SHL est un hackerspace, une communauté d'ingénieurs, d'artistes, de
                    scientifiques, d'entrepreneurs et d'autres personnes créatives qui partagent un
                    espace de travail et de socialisation. N'hésitez pas à venir voir par vous-même
                    ce qu'est le SHL.
                </p>

                <div class="flex flex-col gap-2">
                    <h2 class="text-white text-lg font-medium text-left">Adhésion au SHL</h2>
                    <p class="text-white/70 text-left">
                        Nous sommes une association à but non lucratif et sans le soutien de nos
                        membres, nous cesserions d'exister ! L'adhésion normale est de 180 euros par
                        an pour un accès illimité à l'espace.
                    </p>
                </div>

                <div class="flex flex-col gap-2">
                    <h2 class="text-white text-lg font-medium text-left">Pour devenir membre</h2>
                    <p class="text-white/70 text-left">
                        Venez plusieurs fois aux soirées Open Tuesday ou à nos événements Open Lab.
                        Faites connaissance avec quelques membres, parlez de vos centres d'intérêt.
                        Remplissez le formulaire d'adhésion. Trouvez deux parrains pour signer votre
                        formulaire d'adhésion. Une fois votre demande traitée, vous recevrez un
                        courrier de bienvenue avec les instructions de paiement. Une fois que nous
                        aurons reçu votre paiement, vous aurez accès au hackerspace. L’accès est
                        individuel et ne peut être partagé. Il nécessite que vous possédiez un
                        smartphone (consultez nous si ce n’est pas le cas)
                    </p>
                </div>

                <div class="flex flex-col gap-2">
                    <h2 class="text-white text-lg font-medium text-left">Politique du SHL</h2>
                    <p class="text-white/70 text-left">
                        Lorsque vous devenez membre du SHL, vous acceptez de suivre
                        quelques règles simples.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
