package com.cattraction.demo.datastore;

import com.cattraction.demo.domains.Post;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class PostData {

    private static final List<Post> POSTS_LIST = new ArrayList<>();

    static{
        POSTS_LIST.add(new Post(UUID.randomUUID(),
                "pet_01",
                "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"));
        POSTS_LIST.add(new Post(UUID.randomUUID(),
                "pet_02",
                "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"));
        POSTS_LIST.add(new Post(UUID.randomUUID(),
                "pet_03",
                "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"));
        POSTS_LIST.add(new Post(UUID.randomUUID(),
                "pet_04",
                "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"));
        POSTS_LIST.add(new Post(UUID.randomUUID(),
                "pet_05",
                "https://images.unsplash.com/photo-1601758002677-3aadb781fddd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"));
        POSTS_LIST.add(new Post(UUID.randomUUID(),
                "pet_06",
                "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"));
        POSTS_LIST.add(new Post(UUID.randomUUID(),
                "pet_07",
                "https://images.unsplash.com/photo-1566847438217-76e82d383f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"));
        POSTS_LIST.add(new Post(UUID.randomUUID(),
                "pet_08",
                "https://images.unsplash.com/photo-1493406300581-484b937cdc41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"));
        POSTS_LIST.add(new Post(UUID.randomUUID(),
                "pet_09",
                "https://images.unsplash.com/photo-1569591159212-b02ea8a9f239?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"));

    }

    public List<Post> getPostsList() {
        return POSTS_LIST;
    }
}
