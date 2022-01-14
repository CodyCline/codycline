import { ContentTags } from "../components/ContentTemplate";
import { Icon } from "../components/ui/Icon";
import { IconTag } from "../components/ui/Tag";
import { loadAllCategories } from "../lib/load-categories";


const CategoryPage = ({categories}:any) => {
    return (
        <>
        <ContentTags>
            <h2>All Content Categories</h2>
        </ContentTags>
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