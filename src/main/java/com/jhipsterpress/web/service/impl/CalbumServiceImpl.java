package com.jhipsterpress.web.service.impl;

import com.jhipsterpress.web.service.CalbumService;
import com.jhipsterpress.web.domain.Calbum;
import com.jhipsterpress.web.repository.CalbumRepository;
import com.jhipsterpress.web.repository.search.CalbumSearchRepository;
import com.jhipsterpress.web.service.dto.CalbumDTO;
import com.jhipsterpress.web.service.mapper.CalbumMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * Service Implementation for managing Calbum.
 */
@Service
@Transactional
public class CalbumServiceImpl implements CalbumService {

    private final Logger log = LoggerFactory.getLogger(CalbumServiceImpl.class);

    private CalbumRepository calbumRepository;

    private CalbumMapper calbumMapper;

    private CalbumSearchRepository calbumSearchRepository;

    public CalbumServiceImpl(CalbumRepository calbumRepository, CalbumMapper calbumMapper, CalbumSearchRepository calbumSearchRepository) {
        this.calbumRepository = calbumRepository;
        this.calbumMapper = calbumMapper;
        this.calbumSearchRepository = calbumSearchRepository;
    }

    /**
     * Save a calbum.
     *
     * @param calbumDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public CalbumDTO save(CalbumDTO calbumDTO) {
        log.debug("Request to save Calbum : {}", calbumDTO);

        Calbum calbum = calbumMapper.toEntity(calbumDTO);
        calbum = calbumRepository.save(calbum);
        CalbumDTO result = calbumMapper.toDto(calbum);
        calbumSearchRepository.save(calbum);
        return result;
    }

    /**
     * Get all the calbums.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<CalbumDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Calbums");
        return calbumRepository.findAll(pageable)
            .map(calbumMapper::toDto);
    }


    /**
     * Get one calbum by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<CalbumDTO> findOne(Long id) {
        log.debug("Request to get Calbum : {}", id);
        return calbumRepository.findById(id)
            .map(calbumMapper::toDto);
    }

    /**
     * Delete the calbum by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Calbum : {}", id);
        calbumRepository.deleteById(id);
        calbumSearchRepository.deleteById(id);
    }

    /**
     * Search for the calbum corresponding to the query.
     *
     * @param query the query of the search
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<CalbumDTO> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of Calbums for query {}", query);
        return calbumSearchRepository.search(queryStringQuery(query), pageable)
            .map(calbumMapper::toDto);
    }
}
