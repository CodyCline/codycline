import { ContentTags, ContentTitle } from "../components/ContentTemplate";
import { PageSeo } from "../components/Seo";
import { Icon } from "../components/ui/Icon";
import { IconTag } from "../components/ui/Tag";
import { loadAllCategories } from "../lib/loadCategories";
import { siteMetadata } from "../site-metadata";


const CategoryPage = ({categories}:any) => {
    return (
        <>
        <PageSeo 
            title={`content categories - ${siteMetadata.headerTitle}`}
            description={siteMetadata.description}
        />
        <ContentTitle header="Categories">
            All possible content categories
        </ContentTitle>
        <ContentTags>
            {categories && categories.map((category: object) => {
                const { name, frequency }:any = category;
                return (
                    <IconTag 
                        link={`/category/${name}`} 
                        icon={name} 
                        key={name}
                    >
                        {name} ({frequency as string})
                    </IconTag>
                )
            })}
        </ContentTags>
        </>
    )
}

export async function getStaticProps() {
    const categoryList = await loadAllCategories();

    return {
        props: {
            categories: categoryList,
        }
    }
}
export default CategoryPage;