package com.jhipsterpress.web.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import org.springframework.data.elasticsearch.annotations.Document;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Celeb.
 */
@Entity
@Table(name = "celeb")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "celeb")
public class Celeb implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Size(min = 2, max = 40)
    @Column(name = "celeb_name", length = 40, nullable = false)
    private String celebName;

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "celeb_community",
               joinColumns = @JoinColumn(name = "celebs_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "communities_id", referencedColumnName = "id"))
    private Set<Community> communities = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "celeb_uprofile",
               joinColumns = @JoinColumn(name = "celebs_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "uprofiles_id", referencedColumnName = "id"))
    private Set<Uprofile> uprofiles = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCelebName() {
        return celebName;
    }

    public Celeb celebName(String celebName) {
        this.celebName = celebName;
        return this;
    }

    public void setCelebName(String celebName) {
        this.celebName = celebName;
    }

    public Set<Community> getCommunities() {
        return communities;
    }

    public Celeb communities(Set<Community> communities) {
        this.communities = communities;
        return this;
    }

    public Celeb addCommunity(Community community) {
        this.communities.add(community);
        community.getCelebs().add(this);
        return this;
    }

    public Celeb removeCommunity(Community community) {
        this.communities.remove(community);
        community.getCelebs().remove(this);
        return this;
    }

    public void setCommunities(Set<Community> communities) {
        this.communities = communities;
    }

    public Set<Uprofile> getUprofiles() {
        return uprofiles;
    }

    public Celeb uprofiles(Set<Uprofile> uprofiles) {
        this.uprofiles = uprofiles;
        return this;
    }

    public Celeb addUprofile(Uprofile uprofile) {
        this.uprofiles.add(uprofile);
        uprofile.getCelebs().add(this);
        return this;
    }

    public Celeb removeUprofile(Uprofile uprofile) {
        this.uprofiles.remove(uprofile);
        uprofile.getCelebs().remove(this);
        return this;
    }

    public void setUprofiles(Set<Uprofile> uprofiles) {
        this.uprofiles = uprofiles;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Celeb celeb = (Celeb) o;
        if (celeb.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), celeb.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Celeb{" +
            "id=" + getId() +
            ", celebName='" + getCelebName() + "'" +
            "}";
    }
}
