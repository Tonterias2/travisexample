package com.jhipsterpress.web.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of InterestSearchRepository to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class InterestSearchRepositoryMockConfiguration {

    @MockBean
    private InterestSearchRepository mockInterestSearchRepository;

}
