import Image from "next/image";
import ostrich from './static/ostrich.avif';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.card}>
          <div>
            <Image
              src="/owl.jpg"
              alt="Owl"
              priority
              fill
            />
          </div>
          <p>Image from `/public` folder, which doesn't respect `assetPrefix`</p>
          <small>Photo by <a href="https://unsplash.com/@erik_karits?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Erik Karits</a> on <a href="https://unsplash.com/photos/an-owl-sitting-on-top-of-a-wooden-fence-PkNjqQsZC4Y?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></small>
        </div>
        <div className={styles.card}>
          <div>
            <Image
              src={ostrich}
              alt="Ostrich"
              unoptimized
              fill
            />
          </div>
          <p>Image imported as a module respect `assetPrefix` by default if `unoptimized` is set</p>
          <small>Photo by <a href="https://unsplash.com/@photosimon?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Simon Infanger</a> on <a href="https://unsplash.com/photos/portrait-of-ostrich-CRtT75GOg5E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></small>
        </div>
        <div className={styles.card}>
          <div>
            <Image
              src={ostrich}
              alt="Ostrich"
              fill
            />
          </div>
          <p>Image imported as a module respect `assetPrefix`, but if image optimization is enabled, you must pass in the <a href="https://nextjs.org/docs/app/api-reference/next-config-js/images">custom loader</a> or it won't work with CDN.</p>
          <small>Photo by <a href="https://unsplash.com/@photosimon?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Simon Infanger</a> on <a href="https://unsplash.com/photos/portrait-of-ostrich-CRtT75GOg5E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></small>
        </div>

      </div>
    </main>
  );
}
